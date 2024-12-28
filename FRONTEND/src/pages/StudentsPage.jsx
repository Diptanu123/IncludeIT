
const students = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Chris Brown",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "James Anderson",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "Liam Taylor",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Ava Hernandez",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];


function StudentsPage() {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-100 text-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700">Our Students</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {student.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentsPage;
