//Render a List: Take an array of strings and render them as <li> items.

const users = [
  "John Doe",
  "Jane Smith",
  "Michael Johnson",
  "Emily Davis",
  "David Wilson",
  "Sarah Brown",
  "Daniel Miller",
  "Olivia Taylor",
  "James Anderson",
  "Sophia Thomas",
];

function RenderList() {
  return (
    <ul className="flex flex-col gap-3 font-mono px-4">
      {users.map((user) => (
        <li key={user} className="text-sm text-mauve-800">
          {user}
        </li>
      ))}
    </ul>
  );
}

export default RenderList;
