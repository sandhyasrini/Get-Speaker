import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { defaultConfig } from "../../config/config";
import { developer } from "../slices/developerSlice";

export const getDeveloperList = createAsyncThunk(
  "developers/getDeveloperList",
  async () => {
    try {
      const { data } = await axios.get(
        `${defaultConfig.origin}:${defaultConfig.port}/api/v1/getDevelopers`
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const addDeveloperToDatabase = createAsyncThunk(
  "developer/addDeveloper",
  async (value: developer) => {
    try {
      const { data } = await axios.post(
        `${defaultConfig.origin}:${defaultConfig.port}/api/v1/addDeveloper`,
        {
          value,
        }
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const editDeveloper = createAsyncThunk(
  "developer/editDeveloper",
  async (value: developer) => {
    try {
      const { data } = await axios.put(
        `${defaultConfig.origin}:${defaultConfig.port}/api/v1/editDeveloper`,
        {
          value,
        }
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);
