import corgiPic from "../../images/corgi.png";
import moosePic from "../../images/moose.png";
import lakePic from "../../images/lake.png";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList(props) {
  return (
    <section
      className={
        props.isSearchResult ? "cards-list cards-list_active" : "cards-list"
      }
    >
      <h2 className="cards-list__title">Search results</h2>
      <ul className="cards-list__container">
        <NewsCard
          articleImage={corgiPic}
          articleDate={"November 4, 2020"}
          articleTitle={`Everyone Needs a Special 'Sit Spot' in Nature`}
          articleText={`Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...`}
          articleSource={"treehugger"}
          isLoggedIn={props.isLoggedIn}
        />
        <NewsCard
          articleImage={moosePic}
          articleDate={"February 19, 2019"}
          articleTitle={`Nature makes you better`}
          articleText={`We all know how good nature can make us feel. We have known it for
          millennia: the sound of the ocean, the scents of a forest, the way
          dappled sunlight dances through leaves.`}
          articleSource={"national geographic"}
          isLoggedIn={props.isLoggedIn}
        />
        <NewsCard
          articleImage={lakePic}
          articleDate={"October 19, 2020"}
          articleTitle={`Grand Teton Renews Historic Crest Trail`}
          articleText={`“The linking together of the Cascade and Death Canyon trails, at
          their heads, took place on October 1, 1933, and marked the first
          step in the realization of a plan whereby the hiker will be...`}
          articleSource={"national parks traveler"}
          isLoggedIn={props.isLoggedIn}
        />
      </ul>
      <button className="cards-list__btn">Show More</button>
    </section>
  );
}

export default NewsCardList;
