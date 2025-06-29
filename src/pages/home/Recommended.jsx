import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BookCard from "../books/BookCard";

import { Navigation, Pagination } from "swiper/modules";
import { useLazyFetchAllBooksQuery } from "../../redux/features/books/booksApi";

const Recommended = () => {
  const [fetchBooks, { data: books = [] }] = useLazyFetchAllBooksQuery();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.slice(8, 16).map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
