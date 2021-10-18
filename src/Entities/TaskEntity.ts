class TaskEntity {
  public static levels: Array<string> = ['lowest', 'low', 'medium', 'high', 'highest'];

  public static levelToIndex(level: string): number {
    return TaskEntity.levels.indexOf(level);
  }

  public static currentToTimestamp(): string {
    let date = new Date();

    let day: string = String(date.getDate()).padStart(2, '0'); 
    let month: string = String(date.getMonth() + 1).padStart(2, '0'); 
    let year: string = String(date.getFullYear())

    return `${year}-${month}-${day}T00:00:00`;
  }

  public id: number;
  public content: string;
  public priority: string;
  public difficulty: string;
  public date: Date;

  constructor(message: string, created_at: string) {
    this.content = this.toContent(message);
    this.priority = this.toPriority(message); 
    this.difficulty = 'low';
    this.date = new Date(created_at);
  }

  public serialize(): Object {
    return {
      content: this.content, 
      publishedAt: this.publishedAt(),
      priority: this.priority,
      level: this.priorityIndex()
    }
  }

  private publishedAt(): string {
    let dmy: Array<String> = this.dayMonthYear(); 

    return `${dmy[0]}/${dmy[1]}/${dmy[2]}`;
  }

  private priorityIndex(): number {
    return TaskEntity.levels.indexOf(this.priority);
  }

  private toContent(message: string): string {
    let splittedMessage = message.split(' ');

    if(this.countLevel(splittedMessage[0]) > 0) {
      splittedMessage.shift()
      return splittedMessage.join(' ');
    } else {
      return message;
    }
  }

  private toPriority(message: string): string {
    let splittedMessage = message.split(' ');

    return TaskEntity.levels[this.countLevel(splittedMessage[0])];
  }

  private countLevel(message: string): number {
    return (message.match(/!/g) || []).length;
  }

  private dayMonthYear(): Array<String> {
    let day: string = String(this.date.getDate()).padStart(2, '0'); 
    let month: string = String(this.date.getMonth() + 1).padStart(2, '0'); 
    let year: string = String(this.date.getFullYear());

    return [day, month, year];
  }
}

export default TaskEntity;