import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import "./note.css";

const CreateNote = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const content = form.content.value;

    console.log(title, content);
  };

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="w-[90%]   lg:w-1/2 mx-auto ">
      <form className="create-note relative" onSubmit={handleSubmit}>
        {isExpanded && <input name="title" placeholder="Title" />}

        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;
