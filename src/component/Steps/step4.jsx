import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const step4 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Job Requirement",
          type: "h6",
          color: "textPrimary",
          align: "start",
        })}
        {renderText({
          label: "Your expectation for your next job",
          type: "h8",
          color: "textPrimary",
          align: "start",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      
         <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "jobCategory",
            label: "Job Category",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "currentJob",
            label: "Current Job",
            onChange: handleChange,
          })}
        </Grid>
       
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
      <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "workExperence",
            label: "Experence You have",
            options: [
              { key: "Less than 1 year", value: "Less than 1 year" },
              { key: "More than 1 year", value: "More than 1 year" },
              { key: "1 year", value: "1 year" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "expectedSalary",
            label: "Expected Salary",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "jobApplyFor",
            label: "JobApplyFor",
            options: [
              { key: "Frontend Developer", value: "Frontend Developer" },
              { key: "Project Designer", value: "Project Designer" },
              { key: "React Developer", value: "React Developer" },
              { key: "Web Developer", value: "Web Developer" },
            ],
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

export default step4;