import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "../components/Loading";
import { withRoomConsumer } from "../context";

export default function RoomContainer() {
  return (
    <>
      <RoomConsumer>
        {value => {
          const { loading, sortedRooms, rooms } = value;
          if (loading) {
            return <Loading />;
          }
          return (
            <>
              <RoomsFilter rooms={rooms} />
              <RoomList rooms={sortedRooms} />
            </>
          );
        }}
      </RoomConsumer>
    </>
  );
}

// function RoomContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <div className="">
//       Hello froms rooms contianer
//       <RoomsFilter rooms={rooms} />
//       <RoomList rooms={sortedRooms} />
//     </div>
//   );
// }

// export default withRoomConsumer(RoomContainer);
