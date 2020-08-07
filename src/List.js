import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
}));

export default function List() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const response = await fetch("http://localhost:4001/vehicules");
      const ownersList = await response.json();
      setOwners(ownersList);
      setIsLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        owners.map((e, index) => (
          <div key={index}>
            <Link color="secondary" href={`/${e.vehicule}/${e.ownerName}`}>
              Navigate to {e.ownerName}'s {e.vehicule}
            </Link>
          </div>
        ))
      )}
    </div>
  );
  // List.get;
}
