function Document({ title, content }) {
    const handleScroll = (ev) => {
        if (ev.target.scrollTop + ev.target.clientHeight >= ev.target.scrollHeight) {
            document.querySelector('button').disabled = false;
        }
    };

    return (
        <section>
            <h1 className={title}>{title}</h1>
            <article className={content} style={{ overflow: 'auto', height: '200px' }} onScroll={handleScroll}>{content}</article>
            <button disabled="true">I Agree</button>
        </section>
    );
}

export default Document;