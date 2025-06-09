import { useEffect, useRef, useState } from 'react';

import AnswerCluster from './components/AnswerCluster';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import PostHeader from './components/PostHeader';

import styled from 'styled-components';

function AnswerPage() {
  const baseUrl = 'https://openmind-api.vercel.app/16-6';
  const [subject, setSubject] = useState({});
  const [result, setResult] = useState(null);
  const [questions, setQuestions] = useState([]);
  const resultRef = useRef(null);
  const params = useParams();

  const subjectId = params.id;
  const additionalFetch = () => {
    axios.get(resultRef.current.next).then((res) => {
      setResult(res.data);
      setQuestions((prev) => [...prev, ...res.data.results]);
    });
    console.log(questions);
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/subjects/${subjectId}/`)
      .then((res) => setSubject(res.data));

    axios
      .get(`${baseUrl}/subjects/${subjectId}/questions/?limit=3`)
      .then((res) => {
        setResult(res.data);
        setQuestions(res.data.results);
      });
  }, []);

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  return (
    <>
      <PostHeader
        name={subject.name}
        imageSource={subject.imageSource}
        subjectId={subjectId}
      />
      <AnswerCluster
        subjectInfo={subject}
        result={result}
        questions={questions}
        callback={additionalFetch}
      />
    </>
  );
}

export default AnswerPage;
