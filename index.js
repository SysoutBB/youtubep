const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

function handleListening() {
const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
  res.send("Hello from home");
}
const handleHome = (req, res) => res.send("Hello from my ass");

function handleProfile(req, res) {
  res.send("You are on my profile");
}
const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/", handleHome);