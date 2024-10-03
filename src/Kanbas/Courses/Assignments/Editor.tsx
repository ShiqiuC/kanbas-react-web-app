export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="row mb-3">
        <div className="col-12">
          <label htmlFor="assignmentName" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            id="assignmentName"
            className="form-control"
            defaultValue="A1"
          />
        </div>
      </div>
      <br />
      <br />
      <div className="row mb-3">
        <div className="col-12">
          <textarea
            id="assignmentDescription"
            className="form-control"
            defaultValue={`The assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kanbas application\n- Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
            rows={12}
          />
        </div>
      </div>
      <br />
      <br />
      <table className="custom-margin-left">
        <tr>
          <td className="text-end align-middle pe-3">
            <label htmlFor="points" className="form-label">
              Points
            </label>
          </td>
          <td>
            <input id="points" className="form-control" defaultValue="100" />
          </td>
        </tr>
        <br />
        <tr>
          <td className="text-end align-middle pe-3">
            <label htmlFor="assignmentGroup" className="form-label">
              Assignment Group
            </label>
          </td>
          <td>
            <select
              id="assignmentGroup"
              className="form-select"
              defaultValue="100"
            >
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>PROJECTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td className="text-end align-middle pe-3">
            <label htmlFor="displayGrade" className="form-label">
              Display Grade as
            </label>
          </td>
          <td>
            <select
              id="displayGrade"
              className="form-select"
              defaultValue="100"
            >
              <option>Percentage</option>
              <option>Points</option>
              <option>Letter Grade</option>
            </select>
          </td>
        </tr>

        <br />
        <tr>
          <td className="text-end align-top pe-3">
            <label htmlFor="submissionType" className="form-label">
              Submission Type
            </label>
          </td>
          <td>
            <div>
              <div className="p-3 border rounded">
                <select
                  id="submissionType"
                  className="form-select mb-3"
                  style={{ width: "200px" }}
                >
                  <option>Online</option>
                  <option>On Paper</option>
                  <option>External Tool</option>
                </select>
                <fieldset>
                  <legend className="form-label mb-3 fs-6 fw-bold">
                    Online Entry Options
                  </legend>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="textEntry"
                    />
                    <label
                      className="form-check-label mb-3"
                      htmlFor="textEntry"
                    >
                      Text Entry
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="websiteUrl"
                      defaultChecked
                    />
                    <label
                      className="form-check-label mb-3"
                      htmlFor="websiteUrl"
                    >
                      Website URL
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="mediaRecordings"
                    />
                    <label
                      className="form-check-label mb-3"
                      htmlFor="mediaRecordings"
                    >
                      Media Recordings
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="studentAnnotation"
                    />
                    <label
                      className="form-check-label mb-3"
                      htmlFor="studentAnnotation"
                    >
                      Student Annotation
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="fileUploads"
                    />
                    <label
                      className="form-check-label mb-3"
                      htmlFor="fileUploads"
                    >
                      File Uploads
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td className="text-end align-top pe-3">
            <label htmlFor="assignTo" className="form-label">
              Assign
            </label>
          </td>
          <td>
            <div className="border rounded p-3">
              <div className="mb-3">
                <label htmlFor="assignTo" className="form-label fw-bold">
                  Assign to
                </label>
                <input
                  type="text"
                  id="assignTo"
                  className="form-control"
                  defaultValue="Everyone"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="dueDate" className="form-label fw-bold">
                  Due
                </label>
                <div className="input-group">
                  <input
                    type="datetime-local"
                    id="dueDate"
                    className="form-control"
                    defaultValue="2024-05-13T23:59"
                  />
                  <span className="input-group-text">
                    <i className="bi bi-calendar-event"></i>{" "}
                  </span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="availableFrom" className="form-label fw-bold">
                    Available from
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="datetime-local"
                      id="availableFrom"
                      className="form-control"
                      defaultValue="2024-05-06T00:00"
                    />
                    <span className="input-group-text">
                      <i className="bi bi-calendar-event"></i>{" "}
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="availableUntil"
                    className="form-label fw-bold"
                  >
                    Until
                  </label>
                  <div className="input-group mb-3">
                    <input
                      type="datetime-local"
                      id="availableUntil"
                      className="form-control"
                    />
                    <span className="input-group-text">
                      <i className="bi bi-calendar-event"></i>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td colSpan={3}>
            <hr
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                border: "1px solid #ccc",
              }}
            />
          </td>
        </tr>
        <tr>
          <td className="text-end" colSpan={3}>
            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-outline-secondary me-3">Cancel</button>

              <button className="btn btn-danger">Save</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
