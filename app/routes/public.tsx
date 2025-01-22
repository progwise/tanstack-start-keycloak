import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/navbar'

export const Route = createFileRoute('/public')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to public page</p>
      <Navbar />
    </div>
  )
}
