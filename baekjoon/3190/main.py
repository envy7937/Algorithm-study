# 6 보드의 크기 N
# 3 사과 개수 K
# 3 4 사과 위치 (3,4)
# 2 5
# 5 3
# 3 방향 전환 횟수 L
# 3 D (X, C) X초 이후 C방향으로 90도 회전(3초후 오른쪽으로 90도 회전)
# 15 L 15초후 왼쪽으로 90도 회전
# 17 D 17초후 오른쪽으로 90도 회전

# 뱀의 시작 위치는 (0,0)
# 처음 진행 방향은 오른쪽(1)
# direction = 1  # 상:0, 우:1, 하:2, 좌:3
# 빈공간 0, 사과 1

# https://www.acmicpc.net/problem/3190

# 상, 우, 하, 좌
directions  = {
  0: {'x': 0, 'y': -1},
  1: {'x': 1, 'y': 0},
  2: {'x': 0, 'y': 1},
  3: {'x': -1, 'y': 0},
}

# 보드 설정
def set_board(N):
  K = int(input()) # 사과의 개수

  # 보드 생성
  board = [[0] * N for n in range(N)]
  
  # 사과 좌표 입력
  for n in range(K):
    (x, y) = map(int, input().split(' '))
    # 사과 배치
    board[x-1][y-1] = 2

  return board

# 회전 위치 설정
def set_rotations():
  L = int(input())

  rotations = {}
  for n in range(L):
    (X, C) = input().split(' ')
    rotations[int(X)] = C

  return rotations

def change_rotation(direction, C):
  if C == 'D':
    direction += 1
  else:
    direction -= 1  
      
  return direction % 4

def start_game():
  x = 0
  y = 0
  snake = [[x,y]]
  time = 1
  direction = 1

  while(True):
    x += directions[direction]['y']
    y += directions[direction]['x']

    if (0 <= x < N) and (0 <= y < N) and ([x,y] not in snake):
      snake.append([x,y])

      # 사과를 먹지 않은 경우
      if board[x][y] == 0:
        snake.pop(0)
      # 사과를 먹은 경우
      else:
        board[x][y] = 0

      if time in rotations.keys():
        direction = change_rotation(direction, rotations[time])
        
      time += 1        
    else:
      return time

N = int(input()) # 보드의 크기

board = set_board(N)
rotations = set_rotations()
time = start_game()

print(time)
