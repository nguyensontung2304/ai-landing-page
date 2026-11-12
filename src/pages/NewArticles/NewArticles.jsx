import Intro from "./Intro/Intro.jsx";
import ArticleList from "./ArticleList/ArticleList.jsx";
import JournalCTA from "./JournalCTA/JournalCTA.jsx";
import "./newArticles.scss";
export default function NewArticles() { return <main className="page page-articles"><Intro /><ArticleList /><JournalCTA /></main>; }
