import React, { useState } from "react";
import { useParams } from "react-router";
import "./index.css";
import Buttons from "../buttons";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ paddingBottom: '1.5px', width: '100%' }}>
        <Buttons />
      </div>
      <br /><hr />
      <ul className="list-group wd-modules" style={{ width: '100%' }}>
        <ol style={{padding:"1%", paddingLeft:"0%", border:"1px solid", marginBottom:"2%"}}>
          <input value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} style={{marginLeft:"5%",border:"1.5px solid", width:"30%"}}/>
          <br/>
          <span className="float-end">
          <button onClick={() => dispatch(updateModule(module))} style={{backgroundColor:"blue", color:"white"}}>Update</button><span>{' '}</span>
          <button onClick={() => dispatch(addModule({ ...module, course: courseId }))} style={{backgroundColor:"green", color:"white"}}>Add</button><span>{' '}</span>
          </span>
          <br/>
          <textarea value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} style={{marginLeft:"5%", border:"1.5px solid", width:"30%"}}/>
        </ol>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (

            <li key={index}
              className="list-group-item">
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <button onClick={() => dispatch(deleteModule(module._id))} style={{backgroundColor:"red", color:"white"}}>Delete</button><span>{' '}</span>
                  <button onClick={() => dispatch(setModule(module))} style={{backgroundColor:"green", color:"white"}}>Edit</button><span>{' '}</span>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
                <footer>{module.description}</footer>
                <footer>{module._id}</footer>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;