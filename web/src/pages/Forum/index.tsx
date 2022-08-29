import { Comments } from "../../components/Comments";
import { NavBar } from "../../components/NavBar";
import { SendCommentForm } from "../../components/SendCommentForm";

export function Forum(){
    return(
        <>
            <NavBar/>
            <SendCommentForm/>
            <Comments />
        </>
    );
}