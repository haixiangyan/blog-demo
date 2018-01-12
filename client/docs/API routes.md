# API Routes Documentation

## Subscription

User inputs his email and hit submit button to subscribe the blog.

| Key | Value |
|:---:|:---:|
| URL | /subscribe |
| Method | Post |

### Request Body

```js
{
  subscribeForm: {
    email: 'haixiang6123@gmail.com'
  }
}
```

### Response Body

#### Success

```js
{
  type: 'success'
}
```

#### Fail

```js
{
  type: 'fail'
  errorMsg: 'There is something wrong there.'
}
```

## Contact

User inputs his email and hit submit button to put a suggestion of the blog.

| Key | Value |
|:---:|:---:|
| URL | /contact |
| Method | Post |

### Request Body

```js
{
  contactForm: {
    name: 'Haixiang',
    email: 'haixiang6123@gmail.com',
    subject: 'Title',
    message: 'Content'
  }
}
```

### Response Body

#### Success

```js
{
  type: 'success'
}
```

#### Fail

```js
{
  type: 'fail'
  errorMsg: 'There is something wrong there.'
}
```

## Blogs

To get blog items by given type name (allPost, life, coding). Number 1 is for life type, and number 2 is for coding type

| Key | Value |
|:---:|:---:|
| URL | /blogs |
| Method | Get |

### Request Query

```
?typeName=coding
```

### Response Body

#### Success

```js
{
  type: 'success',
  data: {
    blogItems: [
      {
          imgSrc: `/static/img/blogs/blog_1.jpg`,
          authorInfo: {
            avatar: "/static/img/utils/avatar.jpg",
            author: "HaixiangYan",
          },
          blogInfo: {
            publishDate: '08 - 21',
            publishTime: '22 : 30',
            blogTitle: 'Title',
            blogContent: 'Some paragraphs are here.',
            timeStamp: 1515278799659
          },
          reviewInfo: {
            viewNum: 232,
            isLike: false
          }
      }
    ]
  }
}
```

#### Fail

```js
{
  type: 'fail'
  errorMsg: 'There is something wrong there.'
}
```

## Blog Item

To get a blog by given author name and blog ID.

| Key | Value |
|:---:|:---:|
| URL | /blog |
| Method | Get |

### Request Query

```
?author=HaixiangYan&blogID=123
```

### Response Body

#### Success

```js
{
  type: 'success',
  data: {
    blogItem: {
          imgSrc: `/static/img/blogs/blog_1.jpg`,
          authorInfo: {
            avatar: "/static/img/utils/avatar.jpg",
            author: "HaixiangYan",
          },
          blogInfo: {
            publishDate: '08 - 21',
            publishTime: '22 : 30',
            blogTitle: 'Title',
            blogContent: 'Some paragraphs are here.',
            timeStamp: 1515278799659
          },
          reviewInfo: {
            viewNum: 232,
            isLike: false
          }
    }
  }
}
```

#### Fail

```js
{
  type: 'fail'
  errorMsg: 'There is something wrong there.'
}
```


## Category

To get types and topics of all blogs.

| Key | Value |
|:---:|:---:|
| URL | /category |
| Method | Get |

### Request

None.

### Response Body

#### Success

```js
{
  type: 'success',
  data: {
      navInfo: [
        {
          title: "Coding",
          subNav: [
            {
              topic: Mock.Random.title(2, 5)
            },
            {
              topic: Mock.Random.title(2, 5)
            }
          ]
        },
        {
          title: "Life",
          subNav: [
            {
              topic: Mock.Random.title(2, 5)
            },
            {
              topic: Mock.Random.title(2, 5)
            }
          ]
        }
      ]
  }
}
```

#### Fail

```js
{
  type: 'fail'
  errorMsg: 'There is something wrong there.'
}
```