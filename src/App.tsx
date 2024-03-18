import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { fetchStorage } from "./utils/tzkt";
import { changeAge, changeName } from "./utils/operations";

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [personName, setPersonName] = useState<string>("");
  const [personAge, setPersonAge] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const data: { name: string; age: number } = await fetchStorage();
      console.log("fetched data", data);
      setName(data.name);
      setAge(data.age);
    };

    console.log("name", name);
    console.log("age", age);

    fetchData();
  }, []);

  const changePersonName = async () => {
    setLoading(true);
    try {
      await changeName(personName);
      alert(`change name to ${personName}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const changePersonAge = async () => {
    setLoading(true);
    try {
      await changeAge(personAge);
      alert(`change age to ${personAge}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="btn-container">
            <p>Name: </p>
            <input
              className="input-text"
              type="text"
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="Enter Name"
            />
            <button onClick={changePersonName}>
              {loading ? "Loading..." : "Change"}
            </button>
          </div>
          <div className="btn-container">
            <p>Age: </p>
            <input
              className="input-text age-field"
              type="number"
              onChange={(e) => setPersonAge(e.target.valueAsNumber)}
              placeholder="Enter age"
            />
            <button onClick={changePersonAge}>
              {loading ? "Loading..." : "Change"}
            </button>
          </div>
        </div>

        <div className="container">
          <div className="info-container">
            <h3 className="info-header">Name</h3>
            <p>{name}</p>
          </div>
          <div className="info-container">
            <h3 className="info-header">Age </h3>
            <p>{age}</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
