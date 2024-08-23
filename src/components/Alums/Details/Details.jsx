import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import classes from './Details.module.css'

const getColors = (data) => {
  return (
    data.map((el) => {
      let maxColor = el.url.split('/').pop();
      let minColor = el.thumbnailUrl.split('/').pop();

      while (maxColor.length !== 6) {
        maxColor = '0' + maxColor
      }

      while (minColor.length !== 6) {
        minColor = '0' + minColor
      }

      return {
        title: el.title,
        maxColor: maxColor,
        minColor: minColor
      }
    }))
}


export const Details = () => {
  const {id} = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        if (!responce.ok) {
          throw new Error("Problem with internet connection");
        }
        const result = await responce.json();
        setDetails(getColors(result))
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [id])

  return (
    <div className={classes.detailsHolder}>
      {
        details && details.map((el, index) => {
          return (
            <div key={index}>
              <p>{el.title}</p>
              <div>
                <div style={{background: `#${el.maxColor}`}} className={classes.maxBlock}>
                  <p>600X600</p>
                </div>
                <div style={{background: `#${el.minColor}`}} className={classes.minBlock}>
                  <p>150X150</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )

};

