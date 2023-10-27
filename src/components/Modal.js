import React from "react";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types"; // Import PropTypes
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ModalComponent(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 500,
    height: 400,
    transform: "translate(-50%, -50%)",
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
  };
  const elements = props.children;
  // eslint-disable-next-line react/prop-types
  const openStat = props.isOpen;
  return (
    <>
      {console.log("props", props)}
      <Modal disableEnforceFocus open={openStat}>
        <Box sx={style}>
          <Grid container>
            {elements.map((item, index) => {
              return (
                <Grid
                  container
                  xs={6}
                  key={index}
                  textAlign="center"
                  height="400px"
                  alignItems="center"
                  justifyContent="center"
                  borderRight="2px solid black"
                >
                  {item}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

ModalComponent.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children prop is required
};
export default ModalComponent;
