

function CreateTask() {
  return (
    <>
      <div>
        <h1>Create Your tasks</h1>
        <div>
          <form action="">
            <label htmlFor="task">Task</label>
            <textarea name="task" id="task" className="resize-none" placeholder="Enter your task here..."></textarea>

            <label>Urgency</label>
            <div className="radio-group">
              
              <input type="radio" id="high" name="urgency" value="high" />
              <label htmlFor="high">High</label>

              <input type="radio" id="medium" name="urgency" value="medium" />
              <label htmlFor="medium">Medium</label>

              <input type="radio" id="low" name="urgency" value="low" />
              <label htmlFor="low">Low</label>
            </div>

            <input type="submit" value="Submit Task" />
          </form>
        </div>
      </div>

    </>
  )
}


export default CreateTask;