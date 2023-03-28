import React from 'react';

export default function arrayMaping(
  array,
  classNameList,
  classNameItems,
  textItem,
) {
  // console.log(array);
  return (
    <ul className={classNameList}>
      {array.map((item, i) => {
        // console.log('ITEM INARAYMAPPING:::::::', item.to);

        return (
          <li key={i} className={classNameItems}>
            {item.to ? (
              <a className={textItem} href={item.to}>
                {item.title}
              </a>
            ) : (
              <p className={textItem}>{item}</p>
            )}
          </li>
        );
      })}
    </ul>
  );

  // return (
  //   <ul className={classNameList}>
  //     {array.map((item, i) => (
  //       <li key={i} className={classNameItems}>
  //         <p className={textItem}>{item}</p>
  //       </li>
  //     ))}
  //   </ul>
  // );
}
