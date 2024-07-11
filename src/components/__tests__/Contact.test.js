import { render ,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Contact page- heading is rendered or not",()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

it("Contact page-contact is rendered or not",()=>{
    render(<Contact/>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})