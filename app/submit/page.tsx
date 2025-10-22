import { DashboardHeader } from "@/components/dashboard-header"
import { RequestForm } from "@/components/request-form"

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-balance">Submit IT Request</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Describe your issue and our AI will automatically classify and route it to the right team
            </p>
          </div>

          <RequestForm />
        </div>
      </main>
    </div>
  )
}
