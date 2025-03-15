"use client"
import Events from "./components/Events";
import Header from "./components/Header";
import AuthModal from "./components/AuthModal";
import useHeaderStore from "./stores/headerStore";
import Calendar from "./components/Calendar";
import EventList from "./components/List";
import CreateActions from "./components/EventForm";
import CRUDOPERATION from "./components/EventForm";
import { useCalendar } from "./stores/Calendar";


export default function Home() {
  const isModalActive = useHeaderStore(state =>state.isModalActive )
  const isCalendarModal = useCalendar(state =>state.isCalendarModal);
  const  deactivateCalendarModal = useCalendar(state => state.deactivateCalendarModal);

  return (
    <>  
      <Header/>
      {/* { isModalActive  && <AuthModal/> }  */}
      {/* <Calendar/> */}
      {/* <EventList/>  */}
      {/* <CreateActions/>   */}
      <Events/>

      {/* {isCalendarModal && <CRUDOPERATION onClose = {deactivateCalendarModal} />} */}
    </>
  );
}
