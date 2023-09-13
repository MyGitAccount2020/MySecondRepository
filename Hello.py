import random

def generate_map(size, num_carrots, num_holes):
    map_size = size
    rabbit = (random.randint(0, map_size - 1), random.randint(0, map_size - 1))
    carrots = [(random.randint(0, map_size - 1), random.randint(0, map_size - 1)) for _ in range(num_carrots)]
    holes = [(random.randint(0, map_size - 1), random.randint(0, map_size - 1)) for _ in range(num_holes)]
    return rabbit, carrots, holes

def display_map(map_size, rabbit, carrots, holes):
    for i in range(map_size):
        for j in range(map_size):
            if (i, j) == rabbit:
                print("R", end=" ")
            elif (i, j) in carrots:
                print("c", end=" ")
            elif (i, j) in holes:
                print("O", end=" ")
            else:
                print("-", end=" ")
        print()

def move_rabbit(rabbit, direction, map_size):
    x, y = rabbit

    if direction == "a" and y > 0:
        y -= 1
    elif direction == "d" and y < map_size - 1:
        y += 1
    elif direction == "w" and x > 0:
        x -= 1
    elif direction == "s" and x < map_size - 1:
        x += 1

    return x, y

def play_game(map_size, rabbit, carrots, holes):
    carrot_held = False

    while True:
        display_map(map_size, rabbit, carrots, holes)
        move = input("Move (a/d/w/s), Jump (j), Pick up carrot (p), or Quit (q): ").lower()

        if move == "q":
            break

        if move in ["a", "d", "w", "s"]:
            new_position = move_rabbit(rabbit, move, map_size)
            x, y = new_position

            if (x, y) not in holes and 0 <= x < map_size and 0 <= y < map_size:
                rabbit = new_position
                if carrot_held:
                    carrots.remove(rabbit)
            else:
                print("Invalid move. You can't move there!")

        elif move == "j":
            # Implement jumping logic here
            pass

        elif move == "p":
            if rabbit in carrots and not carrot_held:
                carrot_held = True
                carrots.remove(rabbit)
            elif carrot_held and rabbit not in carrots:
                carrots.append(rabbit)
                carrot_held = False

        if len(carrots) == 0:
            print("You won!")
            break

def main():
    map_size = int(input("Enter grid size: "))
    num_carrots = int(input("Enter number of carrots: "))
    num_holes = int(input("Enter number of holes: "))

    rabbit, carrots, holes = generate_map(map_size, num_carrots, num_holes)
    play_game(map_size, rabbit, carrots, holes)

if __name__ == "__main__":
    main()

