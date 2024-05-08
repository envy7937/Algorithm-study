import {LinkedList} from './linkedList.mjs'
import {CardList} from './nameCard.mjs'

// p.89
const action1 = () => {
  const list = new LinkedList()
  let data = null

  list.insert(11)
  list.insert(11)
  list.insert(22)
  list.insert(22)
  list.insert(33)

  console.log(`현재 데이터 수: ${list.count()}`)

  if (list.first()) {
    console.log(list.getData())

    while(list.next()) {
      console.log(list.getData())
    }
  }

  if (list.first()) {
    if (list.getData() === 22) {
      list.remove()
    }

    while(list.next()) {
      if (list.getData() === 22) {
        list.remove()
      }
    }
  }

  console.log(`현재 데이터 수: ${list.count()}`)

  if (list.first()) {
    console.log(list.getData())

    while(list.next()) {
      console.log(list.getData())
    }
  }
}

// p.99
const action2 = () => {
  const list = new CardList()

  // 정보 입력
  list.makeNameCard('홍길동', '010-1234-5678')
  list.makeNameCard('산나비', '010-8282-4949')
  list.makeNameCard('고길동', '010-5555-9999')

  // 리스트 출력
  console.log(`리스트 출력`)
  list.showList()

  // 검색
  console.log(`검색`)
  list.find('고길동')

  // 전화번호 변경
  console.log(`전화번호 변경`)
  list.changePhoneNum('고길동', '010-2222-3333')
  list.find('고길동')

  // 삭제
  list.remove('산나비')

  // 리스트 출력
  console.log(`리스트 출력`)
  list.showList()
}

const main = () => {
  // 2024.04.30 - Linked List p.89
  //action1()
  // 2024.05.08 - Linked List p.99
  action2()
}

main()