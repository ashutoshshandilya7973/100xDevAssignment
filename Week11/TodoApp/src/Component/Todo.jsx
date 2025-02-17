const Todo = () => {
  return (
    <div className="bg-[url('/img1.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-4">This is my Todo Application</h1>
      <div className="flex space-x-2">
        <input type="text" placeholder="Enter the todo" className="border p-2" />
        <button className="bg-black text-white p-2">Add</button>
      </div>
    </div>
  );
};

export default Todo;
