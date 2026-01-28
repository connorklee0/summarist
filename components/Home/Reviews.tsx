"use client";
import { BsStarFill } from "react-icons/bs";
import { useModal } from "../../app/hooks/useModal";

const Reviews = () => {
  const { openLoginModal } = useModal();
  return (
    <section id="reviews">
      <div className="row">
        <div className="container">
          <div className="section__title">What our members say</div>
          <div className="reviews__wrapper">
            <div className="review">
              <div className="review__header">
                <div className="review__name">Hanna M.</div>
                <div className="review__stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <BsStarFill key={index} />
                  ))}
                </div>
              </div>
              <div className="review__body">
                This app has been a{" "}
                <span className="font-bold">game-changer</span> for me! It's
                saved me so much time and effort in reading and comprehending
                books. Highly recommend it to all book lovers.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">David B.</div>
                <div className="review__stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <BsStarFill key={index} />
                  ))}
                </div>
              </div>
              <div className="review__body">
                I love this app! It provides{" "}
                <span className="font-bold">
                  concise and accurate summaries
                </span>{" "}
                of books in a way that is easy to understand. It's also very
                user-friendly and intuitive.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Nathan S.</div>
                <div className="review__stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <BsStarFill key={index} />
                  ))}
                </div>
              </div>
              <div className="review__body">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.{" "}
                <span className="font-bold">
                  The summaries are well-written and informative.
                </span>{" "}
                Definitely worth downloading.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Ryan R.</div>
                <div className="review__stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <BsStarFill key={index} />
                  ))}
                </div>
              </div>
              <div className="review__body">
                If you're a busy person who{" "}
                <span className="font-bold">
                  loves reading but doesn't have the time
                </span>{" "}
                to read every book in full, this app is for you! The summaries
                are thorough and provide a great overview of the book's content.
              </div>
            </div>
          </div>
          <div className="reviews__btn--wrapper">
            <button
              className="btn max-w-75 flex items-center justify-center"
              onClick={openLoginModal}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
