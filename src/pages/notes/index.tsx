import NotesHeader from "@/components/notes/NotesHeader";
import Notes from "@/components/notes/Notes";
import Head from "next/head";

const NotesPage = () => {
  return (
    <>
      <Head>
        <title>Notes</title>
      </Head>
      <NotesHeader />
      <Notes />
    </>
  );
};

export default NotesPage;
