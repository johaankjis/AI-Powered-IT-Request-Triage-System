import { DashboardHeader } from "@/components/dashboard-header"
import { RequestDetails } from "@/components/request-details"
import { RequestTimeline } from "@/components/request-timeline"
import { RequestActions } from "@/components/request-actions"

export default function RequestDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          <RequestDetails requestId={params.id} />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RequestTimeline requestId={params.id} />
            </div>
            <div>
              <RequestActions requestId={params.id} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
