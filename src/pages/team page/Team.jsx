import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./team.css";
import { Search } from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamSlide from "../../components/team slide/TeamSlide";
import "./team.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const teamData = [
  { id: "ID001", name: "Alice", image: "https://via.placeholder.com/150?text=Alice" },
  { id: "ID002", name: "Bob", image: "https://via.placeholder.com/150?text=Bob" },
  { id: "ID003", name: "Charlie", image: "https://via.placeholder.com/150?text=Charlie" },
  { id: "ID004", name: "David", image: "https://via.placeholder.com/150?text=David" },
  { id: "ID005", name: "Eve", image: "https://via.placeholder.com/150?text=Eve" },
  { id: "ID006", name: "Fay", image: "https://via.placeholder.com/150?text=Fay" },
  { id: "ID007", name: "Grace", image: "https://via.placeholder.com/150?text=Grace" },
  { id: "ID008", name: "Hank", image: "https://via.placeholder.com/150?text=Hank" },
  { id: "ID009", name: "Ivy", image: "https://via.placeholder.com/150?text=Ivy" },
  { id: "ID010", name: "Jack", image: "https://via.placeholder.com/150?text=Jack" },
];

function Team() {
  const [search, setSearch] = useState("");
  const [filteredTeam, setFilteredTeam] = useState(teamData);
  const [inputFocused, setInputFocused] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = teamData.filter(
      (member) =>
        member.name.toLowerCase().includes(value) ||
        member.id.toLowerCase().includes(value)
    );
    setFilteredTeam(filtered);
  };

  return (
    <div className="team pr df-c ">
      <div className="">
        <div className=" df-c !gap-20 ma py-40 pr">
        <img src="/img/beedash-.png" className="flowerleft sdnone !left-0 !right-auto dashed1 !w-96 !z-10 !top-1/2" alt="" />
          <div className="title title3 pr w-fit mx-auto">
            our team <div className="wave"></div>
          </div>
          <div className="df w-1/3 sm-w-full mx-auto pr justify-center">
            <input
              type="text"
              className="input in-ser !w-full"
              placeholder="Search by name or ID"
              value={search}
              onChange={handleSearch}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
            <Search className="ser" />
            {inputFocused && search && (
            <div className="team-list" key={filteredTeam.map((m) => m.id).join()}>
            <AnimatePresence>
                {filteredTeam.length > 0 ? (
                    filteredTeam.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="team-member"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.2*index }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="member-image"
                            />
                            <div className="member-details">
                                <h3>{member.name}</h3>
                                <p>ID: {member.id}</p>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <motion.p
                        className="no-results"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        No results found
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
        
            )}
          </div>
        </div>

        {/* Team List with Animation */}
      </div>
      <div className="car pr ">
      <img src="/img/spl2.png" class="spl2 z-t" alt="" />
      <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><TeamSlide /></SwiperSlide>
            <SwiperSlide><TeamSlide /></SwiperSlide>
            <SwiperSlide><TeamSlide /></SwiperSlide>
            <SwiperSlide><TeamSlide /></SwiperSlide>
            <SwiperSlide><TeamSlide /></SwiperSlide>
            <SwiperSlide><TeamSlide /></SwiperSlide>
            <SwiperSlide><TeamSlide /></SwiperSlide>
        </Swiper>

      </div>
    </div>
  );
}

export default Team;
