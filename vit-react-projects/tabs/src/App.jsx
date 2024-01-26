import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await fetch(url);
      const newJobs = await data.json();
      setJobs(newJobs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <h2>Tabs Starter</h2>;
};
export default App;
