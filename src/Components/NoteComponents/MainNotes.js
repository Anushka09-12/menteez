import Header from "./Header"
import Note from "./Notes"
import "./App.css"
import "./Notes.css"

function MainNotes(){
    return(
        <div className="Main">
        <Header></Header>
        <Note></Note>
        </div>
    )
}

export default MainNotes;