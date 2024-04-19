#include <stdbool.h>
#include <stdlib.h>

typedef struct node
{
  size_t x;
  size_t y;
  struct node *next;
} Node;

typedef struct queue
{
  Node *start, *end;
} Queue;

Queue *create_queue()
{
  Queue *queue = (Queue *)malloc(sizeof(Queue));
  queue->start = queue->end = NULL;
  return queue;
}

void enqueue(Queue *q, size_t x, size_t y)
{
  Node *new_node = (Node *)malloc(sizeof(Node));
  new_node->x = x;
  new_node->y = y;
  new_node->next = NULL;

  if (q->end == NULL)
  {
    q->start = q->end = new_node;
    return;
  }

  q->end->next = new_node;
  q->end = new_node;
}

Node *dequeue(Queue *q)
{
  if (q->start == NULL)
  {
    return NULL;
  }

  Node *temp = q->start;
  q->start = q->start->next;

  if (q->start == NULL)
  {
    q->end = NULL;
  }

  return temp;
}

void bfs(char **grid, size_t x, size_t y, size_t rows, size_t cols, Queue *q)
{
  enqueue(q, x, y);

  const int dx[] = {1, 0, -1, 0};
  const int dy[] = {0, 1, 0, -1};

  Node *next;
  while (q->start)
  {
    next = dequeue(q);

    if (grid[next->x][next->y] == '0')
    {
      free(next); // free the point after using it
      continue;
    }

    grid[next->x][next->y] = '0';

    for (int i = 0; i < 4; i++)
    {
      int newX = next->x + dx[i];
      int newY = next->y + dy[i];

      if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] == '1')
      {
        enqueue(q, newX, newY);
      }
    }

    free(next);
  }
}

int numIslands(char **grid, int gridSize, int *gridColSize)
{
  size_t rows = gridSize, cols = *gridColSize;

  Queue *queue = create_queue();
  int islands = 0;

  for (size_t x = 0; x < rows; x++)
  {
    for (size_t y = 0; y < cols; y++)
    {
      if (grid[x][y] == '1')
      {
        islands++;
        bfs(grid, x, y, rows, cols, queue);
      }
    }
  }

  return islands;
}
