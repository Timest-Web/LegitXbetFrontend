import React, { ChangeEvent, useState } from "react";

interface TicketDetails {
  subject: string;
  priority: string;
  message: string;
}

export const ticketList: TicketDetails[] = [];

const SupportInactive = () => {
  const [ticketDetails, setTicketDetails] = useState<TicketDetails>({
    subject: "",
    priority: "",
    message: "",
  });

  const ticketDetailsHandler = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setTicketDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const ticketFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ticketDetails);
    ticketList.push(ticketDetails);
    // ticketDetails.message = "";
    // ticketDetails.priority = "";
    // ticketDetails.subject = "";
  };

  return (
    <div>
      <p className="mb-4 font-bold">Open New Ticket</p>
      <div className="bg-white rounded-lg p-6">
        <form
          onSubmit={ticketFormHandler}
          action="submit"
          className="flex flex-col space-y-8"
        >
          <section className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0 ">
            <div className="flex flex-col">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={ticketDetails.subject}
                onChange={ticketDetailsHandler}
                className="w-11/12 md:w-96 rounded-md p-2 bg-gray-200"
              />
            </div>
            <div className="flex flex-col">
              <label>Priority</label>
              <select
                className=" w-11/12 md:w-96 rounded-md p-3 bg-gray-200"
                id="priority"
                name="priority"
                onChange={ticketDetailsHandler}
                value={ticketDetails.priority}
              >
              <option value=""></option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </section>
          <div className="flex flex-col">
            <label>Message</label>
            <textarea
              onChange={ticketDetailsHandler}
              value={ticketDetails.message}
              name="message"
              className="w-11/12 md:w-[80%] rounded-md p-4 bg-gray-200"
            />
          </div>
          <label htmlFor="file">Attachment</label>
          <input
            className=" w-11/12 md:w-[80%] rounded-md p-3 bg-gray-200"
            type="file"
            id="file"
            name="file"
            multiple
          />
          <button
            type="submit"
            className="bg-black text-white text-center p-2 w-32 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SupportInactive;
