import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { matchPath } from 'react-router'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 5rem;
`

const List = styled.div`
  > * + * {
    margin-top: 1rem;
  }
`

const articles = {
  'introducing-lumagl': {
    title: 'Introducing luma.gl v4.0',
    markdown: 'Hello',
  },
}

const renderArticle = article => (
  <Container>
    <h1>{article.title}</h1>
    <div>{article.markdown}</div>
  </Container>
)

export default props => {
  const { params } = matchPath(window.location.pathname, props.path)

  if (params.name) {
    const article = articles[params.name]
    if (article) {
      return renderArticle(article)
    }
  }

  return (
    <Container>
      <List>
        {Object.keys(articles).map(key => (
          <div key={key}>
            {articles[key].title}
            <Link to={`/blog/${key}`}>{'Link'}</Link>
          </div>
        ))}
      </List>
    </Container>
  )
}
