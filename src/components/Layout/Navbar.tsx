import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  PlusCircle,
  Library,
  Compass,
  User,
  LogOut,
  Moon,
  Sun,
  Menu,
  X,
  Sparkles,
  Play,
  Video
} from 'lucide-react'
import { Button } from '../ui/Button'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import { cn } from '../../lib/utils'

export function Navbar() {
  const { user, profile, signOut, isDemo, exitDemoMode } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Only show full navigation if user is authenticated (not demo mode)
  const showFullNav = user && profile && !isDemo

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Create', href: '/create-story', icon: PlusCircle },
    { name: 'Library', href: '/library', icon: Library },
    { name: 'Videos', href: '/videos', icon: Video },
    { name: 'Explore', href: '/explore', icon: Compass },
  ]

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleExitDemo = () => {
    exitDemoMode()
    navigate('/')
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={showFullNav || isDemo ? '/dashboard' : '/'} className="flex items-center space-x-2">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
                  StoryBuilder
                </span>
                {isDemo && (
                  <span className="text-xs demo-badge">
                    <Play className="w-2 h-2 mr-1" />
                    Demo
                  </span>
                )}
              </motion.div>
            </Link>

            {/* Desktop Navigation - Only show if fully authenticated */}
            {showFullNav && (
              <div className="items-center hidden space-x-1 md:flex">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105',
                        isActive(item.href)
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent hover:shadow-sm'
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
              </div>
            )}

            {/* Right side */}
            <div className="flex items-center space-x-2">
              {/* Theme toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="transition-transform rounded-full hover:scale-105"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>

              {showFullNav ? (
                <>
                  {/* Authenticated user menu */}
                  <div className="items-center hidden space-x-2 md:flex">
                    <Link to={`/profile/${profile?.username}`}>
                      <Button variant="ghost" size="icon" className="transition-transform rounded-full hover:scale-105">
                        <User className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleSignOut}
                      className="transition-transform rounded-full hover:scale-105"
                    >
                      <LogOut className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Mobile menu button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  </Button>
                </>
              ) : isDemo ? (
                <>
                  {/* Demo mode buttons */}
                  <div className="items-center hidden space-x-2 md:flex">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleExitDemo}
                    >
                      Exit Demo
                    </Button>
                    <Link to="/auth/register">
                      <Button variant="neon" size="sm">
                        Sign Up Free
                      </Button>
                    </Link>
                  </div>

                  {/* Mobile menu button for demo */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  </Button>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link to="/auth/login">
                    <Button variant="ghost" className="transition-transform hover:scale-105">Sign In</Button>
                  </Link>
                  <Link to="/auth/register">
                    <Button variant="neon" className="transition-transform hover:scale-105">Get Started</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu */}
          {(showFullNav || isDemo) && mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="py-4 border-t md:hidden"
            >
              <div className="space-y-2">
                {(showFullNav || isDemo) && navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                        isActive(item.href)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}

                <div className="pt-2 space-y-2 border-t">
                  {showFullNav ? (
                    <>
                      <Link
                        to={`/profile/${profile?.username}`}
                        className="flex items-center px-3 py-2 space-x-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </Link>
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-3 py-2 space-x-2 text-sm font-medium text-left rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </>
                  ) : isDemo ? (
                    <>
                      <button
                        onClick={() => {
                          handleExitDemo()
                          setMobileMenuOpen(false)
                        }}
                        className="flex items-center w-full px-3 py-2 space-x-2 text-sm font-medium text-left rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
                      >
                        <X className="w-4 h-4" />
                        <span>Exit Demo</span>
                      </button>
                      <Link
                        to="/auth/register"
                        className="flex items-center px-3 py-2 space-x-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>Sign Up Free</span>
                      </Link>
                    </>
                  ) : null}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </>
  )
}
