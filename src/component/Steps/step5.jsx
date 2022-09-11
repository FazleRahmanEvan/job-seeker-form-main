import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step5 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Experience",
          type: "h6",
          color: "textPrimary",
          align: "start",
        })}
        {renderText({
          label: "Share your previous job experience with us.",
          type: "h8",
          color: "textPrimary",
          align: "start",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        
         <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "yourPosition",
            label: "Your Position",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "yourCompany",
            label: "Your Company Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "jobStarted",
            label: "Job Started Date",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "lastDate",
            label: "Last Date of This Job",
            onChange: handleChange,
          })}
        </Grid>
     
       
      </Grid>

      <Grid container component={Box} justify='flex-end' mt={2} p={2}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step5;
