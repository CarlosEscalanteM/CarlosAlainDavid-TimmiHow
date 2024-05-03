"""empty message

Revision ID: abd0bde5329f
Revises: 85f8e8d53edd
Create Date: 2024-05-03 05:17:56.863769

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'abd0bde5329f'
down_revision = '85f8e8d53edd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('consumer_course',
    sa.Column('consumer_id', sa.Integer(), nullable=False),
    sa.Column('course_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['consumer_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['course_id'], ['courses.id'], ),
    sa.PrimaryKeyConstraint('consumer_id', 'course_id')
    )
    with op.batch_alter_table('courses', schema=None) as batch_op:
        batch_op.add_column(sa.Column('calendly_url', sa.String(length=255), nullable=True))
        batch_op.add_column(sa.Column('provider_id', sa.Integer(), nullable=True))
        batch_op.create_foreign_key(None, 'users', ['provider_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('courses', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.drop_column('provider_id')
        batch_op.drop_column('calendly_url')

    op.drop_table('consumer_course')
    # ### end Alembic commands ###
