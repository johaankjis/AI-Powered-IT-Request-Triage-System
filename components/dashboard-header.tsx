import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, Settings, Plus } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IT</span>
              </div>
              <span className="font-semibold text-lg">Triage System</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link
                href="/requests"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Requests
              </Link>
              <Link
                href="/workflows"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Workflows
              </Link>
              <Link
                href="/analytics"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Analytics
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/submit">
              <Button size="sm" className="gap-2">
                <Plus className="size-4" />
                <span className="hidden sm:inline">New Request</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
              <Bell className="size-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
