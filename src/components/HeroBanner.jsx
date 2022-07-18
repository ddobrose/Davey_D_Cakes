import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const HeroBanner = ({title,heading,paragraph,goto,link}) => {
  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Title>{heading}</Card.Title>
        <Card.Text>
          {paragraph}
        </Card.Text>
        <Button href={link} variant="primary">{goto}</Button>
      </Card.Body>
    </Card>
  )
}
