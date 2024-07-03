import { FormEvent, useState } from "react";
import { Match } from "../commons/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { addMatch } from "../Redux/slices/matchSlice";
import { RootState } from "../Redux/store";

const AddMatchForm = () => {
  const dispatch = useDispatch();
  const matches = useSelector((state: RootState) => state.match.matches);
  const [match, setMatch] = useState<Match>({
    title: "",
    venue: "",
    series: "",
    date: new Date().toDateString(),
    time: "12:00",
    umpires: "",
    thirdUmpire: "",
    refree: "",
    toss: "",
    hosts: "",
    streaming: "",
    tv: "",
    teams: [],
    innings: [],
    stadium: { stadium: "", city: "", capacity: 1, ends: "" },
  });
  console.log({ match, matches });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addMatch(match));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          value={match.title}
          onChange={(e) => setMatch({ ...match, title: e.target.value })}
          id="title"
          type="text"
          placeholder="Title"
        />
        <label htmlFor="venue">Venue: </label>
        <input
          value={match.venue}
          onChange={(e) => setMatch({ ...match, venue: e.target.value })}
          id="venue"
          type="text"
          placeholder="Venue"
        />
        <label htmlFor="series">Series: </label>
        <input
          value={match.series}
          onChange={(e) => setMatch({ ...match, series: e.target.value })}
          id="series"
          type="text"
          placeholder="Series"
        />
        <label htmlFor="date">Date: </label>
        <input
          value={match.date}
          onChange={(e) => setMatch({ ...match, date: e.target.value })}
          id="date"
          type="date"
          placeholder="Date"
        />
        <label htmlFor="time">Time: </label>
        <input
          value={match.time}
          onChange={(e) => setMatch({ ...match, time: e.target.value })}
          id="time"
          type="time"
          placeholder="Time"
        />
        <label htmlFor="time">Umpires: </label>
        <input
          value={match.umpires}
          onChange={(e) => setMatch({ ...match, umpires: e.target.value })}
          id="umpires"
          type="text"
          placeholder="umpires"
        />
        <label htmlFor="thirdUmpire">Third Umpire: </label>
        <input
          value={match.thirdUmpire}
          onChange={(e) => setMatch({ ...match, thirdUmpire: e.target.value })}
          id="thirdUmpire"
          type="text"
          placeholder="Third Umpire"
        />
        <label htmlFor="refree">Refree: </label>
        <input
          value={match.refree}
          onChange={(e) => setMatch({ ...match, refree: e.target.value })}
          id="refree"
          type="text"
          placeholder="Refree"
        />
        {/* <label htmlFor="stadium">Stadium: </label>
        <input
          value={match.refree}
          onChange={(e) => setMatch({ ...match, refree: e.target.value })}
          id="stadium"
          type="text"
          placeholder="Stadium"
        /> */}
        <button type="submit">Add Match</button>
      </form>
    </div>
  );
};

export default AddMatchForm;
