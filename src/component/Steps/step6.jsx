import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { styles } from "../common/styles";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
} from "../common/DisplayComponent";

const Step6 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Personal Information",
          type: "h6",
          color: "textPrimary",
          align: "start",
        })}
        {renderText({
          label: "We need some more information to complete your profile.",
          type: "h8",
          color: "textPrimary",
          align: "start",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
    
         <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "fatherName",
            label: "Father's Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "motherName",
            label: "Mother's Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
            <Grid item xs={12}>
          {renderSelect({
            state,
            name: "maritalStatus",
            label: "Marital status",
            options: [
                { key: "Single", value: "single" },
                { key: "Married", value: "married" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
            <Grid item xs={12}>
          {renderSelect({
            state,
            name: "religion",
            label: "Religion",
            options: [
                { key: "Muslim", value: "muslim" },
                { key: "Hindu", value: "hindu" },
                { key: "Buddhist", value: "buddhist" },
                { key: "Christian", value: "christian" },
              
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "address",
            label: "Address",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "roadName",
            label: "Road Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12}>
          {renderSelect({
            state,
            name: "district",
            label: "District",
            options: [
                { key: "Sylhet", value: "sylhet" },
                { key: "Moulovibazar", value: "moulovibazar" },
                { key: "Habigonj", value: "habigonj" },
                { key: "Sunamgonj", value: "Sunamgonj" },
              
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
        <Box ml={2}>{renderButton({ label: "Submit", onClick: handleNext })}</Box>
      </Grid>
    </Paper>
  );
};

export default Step6;