import { useLocation, useParams, useNavigate } from "react-router-dom";
import '../Details/Details.css'
export default function Details() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // data state diye pathacchi //
  const data = location.state;

  if (!data) {
    return (
      <div className="p-6">
        <h2>Data Not Found for ID: {id}</h2>
        <button onClick={() => navigate("/")} className="bg-gray-500 text-white px-3 py-1 rounded mt-2">Go Back</button>
      </div>
    );
  }

  return (
    <div className="p-6 details-card">
      <h1 className="text-2xl font-bold mb-4">Details Page</h1>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Description:</strong> {data.description}</p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-3 py-1 rounded mt-4"
      >
        Back
      </button>
    </div>
  );
}
