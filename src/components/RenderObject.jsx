//Render Objects: Take an array of objects (e.g., users) and render cards with specific properties (name, email).

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    role: "Moderator",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "User",
    status: "Suspended",
  },
  {
    id: 6,
    name: "Sophia Brown",
    email: "sophia.brown@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 7,
    name: "Daniel Taylor",
    email: "daniel.taylor@example.com",
    role: "Moderator",
    status: "Active",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    role: "User",
    status: "Inactive",
  },
];

function RenderObject() {
  return (
    <div className="grid grid-cols-3 p-6 gap-6 font-mono">
        {
            users.map(({id, name, email, role, status}) => <div key={id} className="bg-white flex flex-col gap-4 rounded-xl p-4 shadow">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm text-fuchsia-950 relative flex items-center gap-1">{name}
                        <span className={`w-2 h-2 rounded-full inline-block  ${status === 'Active' ? 'bg-green-600' : 'bg-slate-400'}`}></span>
                    </h3>
                    <span className="text-xs text-mauve-600">{role}</span>
                </div>
                <p className="text-sm text-mauve-900">{email}</p>
            </div>)
        }
    </div>
  )
}

export default RenderObject