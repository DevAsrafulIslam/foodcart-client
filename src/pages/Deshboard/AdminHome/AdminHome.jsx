import useAuth from "../../../hooks/useAuth"
import { BarChart, Users, Package, DollarSign } from "lucide-react"

const AdminHome = () => {
  const { user } = useAuth()

  const stats = [
    { label: "Total Revenue", value: "$45,231", icon: DollarSign },
    { label: "Active Users", value: "2,345", icon: Users },
    { label: "Products", value: "1,234", icon: Package },
    { label: "Sales", value: "567", icon: BarChart },
  ]

  return (
    <div className="p-6 space-y-6 bg-base-200 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-base-content">
          Hi, Welcome{" "}
          <span className="text-primary">
            {user?.displayName || "Admin"}
          </span>
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card shadow-lg rounded-2xl bg-base-100">
            <div className="card-body flex-row items-center justify-between space-y-0 pb-2">
              <h2 className="card-title text-sm font-medium text-base-content/70">
                {stat.label}
              </h2>
              <stat.icon className="h-5 w-5 text-base-content/50" />
            </div>
            <div className="px-6 pb-4">
              <div className="text-2xl font-bold text-base-content">
                {stat.value}
              </div>
              <p className="text-xs text-success">+12% from last month</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card shadow-lg rounded-2xl bg-base-100">
          <div className="card-header">
            <h2 className="card-title text-lg font-semibold">Recent Activity</h2>
          </div>
          <div className="card-body">
            <ul className="space-y-3 text-sm text-base-content/80">
              <li>User John Doe registered.</li>
              <li>Order #1234 confirmed.</li>
              <li>Product XYZ added to inventory.</li>
            </ul>
          </div>
        </div>

        <div className="card shadow-lg rounded-2xl bg-base-100">
          <div className="card-header">
            <h2 className="card-title text-lg font-semibold">Quick Actions</h2>
          </div>
          <div className="card-body flex gap-3">
            <button className="btn btn-primary">
              Add Product
            </button>
            <button className="btn btn-neutral">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminHome