import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useMutation, useQueryClient } from "react-query";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slug: string;
  columns: GridColDef[];
};
function Add(props: Props) {
  //query
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://127.0.0.1:8000/api/${props.slug}s`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Hayat Manual",
          email: "cikezo23@mailinator.com",
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries([`${props.slug}s`]);
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
    props.setOpen(false);
  };
  return (
    <div className="add">
      <div className="model">
        <span className="close" onClick={() => props.setOpen(false)}>
          <b> X </b>
        </span>
        <h2>Add New {props.slug}</h2>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field != "id" && item.field != "image")
            .map((column, index) => (
              <div key={index} className="item">
                <label>{column.headerName}</label>
                <input
                  type={column.type}
                  name={column.field}
                  placeholder={column.headerName}
                />
              </div>
            ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Add;
