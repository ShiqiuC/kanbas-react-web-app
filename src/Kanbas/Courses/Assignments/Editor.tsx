export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <strong>Assignment Name</strong>
      </label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" rows={10} cols={50}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Links to the Kanbas application Links to all relevant source
        code repository Links to all relevant source code repositories The
        Kanbas application should include a link to navigate back to the landing
        page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={2}>
            <label>Online Entry Options</label>
            <br />
            <input id="wd-text-entry" type="checkbox" /> Text Entry
            <br />
            <input id="wd-website-url" type="checkbox" /> Website URL
            <br />
            <input id="wd-media-recordings" type="checkbox" /> Media Recordings
            <br />
            <input id="wd-student-annotation" type="checkbox" /> Student
            Annotation
            <br />
            <input id="wd-file-upload" type="checkbox" /> File Uploads
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>Assign to</td>
        </tr>
        <tr>
          <td align="right" valign="top" colSpan={2}>
            <input id="wd-assign-to" value={"Everyone"} />
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top" colSpan={2}>
            <input type="date" id="wd-due-date" value="2024-05-13" />
          </td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-available-from">Until</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="date" id="wd-available-from" value="2024-05-06" />
          </td>
          <td>
            <input type="date" id="wd-available-until" value="2024-05-20" />
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
          <td align="right" colSpan={3}>
            <button style={{ marginRight: "5px" }}>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
